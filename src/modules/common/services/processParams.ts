const processParams = (key: string, value: string) => {
    const url = new URL(location.href)

    if (value) {
        url.searchParams.set(key, value)
    } else {
        url.searchParams.delete(key)
    }

    return url.pathname + url.search
}

export default processParams
