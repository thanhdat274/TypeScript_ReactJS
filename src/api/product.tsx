import instance from "./instance";

export const list = () => {
    const url = '/products';
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const add = (products) => {
    const url = `/products`;
    return instance.post(url, products);
}