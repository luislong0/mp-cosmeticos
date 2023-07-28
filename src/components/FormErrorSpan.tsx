interface FormErrorSpanProps {
  err?: string
}

export function FormErrorSpan({ err }: FormErrorSpanProps) {
  return <span className="text-sm font-medium text-red-500">{err}</span>
}
