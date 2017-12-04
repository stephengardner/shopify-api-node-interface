interface IShopify {
  product: {
    count(): number;
    create(): any;
    delete(id: string): any;
    get(id: string, params?: {})
    list(params?: {}): any[];
    update(id: string, params?: {});
  };
}
