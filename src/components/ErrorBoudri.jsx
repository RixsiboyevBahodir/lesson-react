import { ErrorBoundary } from "react-error-boundary";

export default function ErrorBoudri({children}) {
  return (
    <ErrorBoundary fallback={<p>error to home</p>}>
        <div>{children}</div>
    </ErrorBoundary>
  )
}
