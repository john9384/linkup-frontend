import React from 'react'

export const useIsInViewport = (ref, hasMore) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false)

  const observer = React.useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  )

  React.useEffect(() => {
    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref, observer])

  return isIntersecting
}
