export const isPLFTaken = async (plf: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    if (plf === 'foobar') {
        return false
    }
    return true
}
