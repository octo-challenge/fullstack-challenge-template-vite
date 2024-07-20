import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_auth/register')({
  component: Register,
})

function Register() {
  return <h1>Register</h1>
}
