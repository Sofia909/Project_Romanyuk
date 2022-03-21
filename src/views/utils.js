export const getResultFirst = (var1, var2) => {
    return var1 * var2
}
export const getResultSecond = (var1, var2, var3) => {
    return var1 + (var2 * var3)
}
export const getResultThird = (var1, var2, var3, var4, var5) => {
    return var1 + (var1 - var2) * (1 - var3) * var4 / var5
}
export const getResultFourth = (var1, var2, var3) => {
    return var1 * (1 - var2) / (1 - var3)
}
export const getResultFifth = (var1, var2, var3, var4) => {
    return var1 * (1 - var2) * 100 / ((var3 - var1) * (1 - var4))
}