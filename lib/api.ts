import { redirect } from 'next/navigation'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

interface ApiRequestOptions {
  method?: HttpMethod
  body?: any
  withToken?: boolean
  tag?: string
}

export async function makeApiRequest(
  url: string,
  {
    method = 'POST',
    body,
    withToken = false,
    tag,
  }: ApiRequestOptions = {}
) {
  const headers: Record<string, string> = {}

  const options: RequestInit & { next?: { tags: string[] } } = {
    method,
    headers,
    next: { tags: [] },
  }

  if (tag) options.next!.tags.push(tag)

  let token: string | undefined

  if (withToken) {
    token = await getAuthToken()
    headers.Authorization = `Bearer ${token}`
  }

  attachBody(options, headers, body)

  const response = await fetch(`${API_BASE_URL}${url}`, options)

  if (response.status === 401 && withToken && token) {
    handleUnauthorized()
  }

  return response
}

// -----------Helper functions-----------------

function attachBody(
  options: RequestInit,
  headers: Record<string, string>,
  body?: any
) {
  if (!body) return

  if (body instanceof FormData) {
    options.body = body
    return
  }

  headers['Content-Type'] = 'application/json'
  options.body = JSON.stringify(body)
}

async function getAuthToken(): Promise<string> {
  if (isBrowser()) {
    return getBrowserAccessToken() ?? '_'
  }

  const { cookies } = await import('next/headers')
  return (await cookies()).get('authToken')?.value ?? '_'
}

function getBrowserAccessToken(): string | undefined {
  return document.cookie
    .split('; ')
    .find(c => c.startsWith('authToken='))
    ?.split('=')[1]
}

function handleUnauthorized(): never {
  clearAuthCookies()

  if (isBrowser()) {
    window.location.href = '/'
  } else {
    redirect('/')
  }

  throw new Error('Authentication expired')
}

function clearAuthCookies() {
  if (!isBrowser()) return

  const expired = 'expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  document.cookie = `authToken=; ${expired}`
  document.cookie = `refreshToken=; ${expired}`
  document.cookie = `userId=; ${expired}`
}

function isBrowser() {
  return typeof window !== 'undefined'
}
