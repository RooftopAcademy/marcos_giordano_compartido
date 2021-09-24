export default class Product {
	private _id: string = "";
	private _name: string = "";
	private _type: string = "";
	private _price: number = 0;
	private _description: string = "";
	private _image: string = "";
	private _thumbnail: string = "";
	private _stock: number = 0;
	private _discount: number = 0;

	constructor() {}

	//#region id
	get id(): string {
		return this._id;
	}
	set id(id: string) {
		this._id = id;
	}
	//#endregion id

	//#region name
	get name(): string {
		return this._name;
	}
	set name(name: string) {
		this._name = name;
	}
	//#endregion name

	//#region type
	get type(): string {
		return this._type;
	}
	set type(type: string) {
		this._type = type;
	}
	//#endregion type

	//#region price
	get price(): number {
		return this._price;
	}
	set price(price: number) {
		this._price = price;
	}
	//#endregion price

	//#region description
	get description(): string {
		return this._description;
	}
	set description(description: string) {
		this._description = description;
	}
	//#endregion description

	//#region image
	get image(): string {
		return this._image;
	}
	set image(image: string) {
		this._image = image;
	}
	//#endregion image

	//#region thumbnail
	get thumbnail(): string {
		return this._thumbnail;
	}
	set thumbnail(thumbnail: string) {
		this._thumbnail = thumbnail;
	}
	//#endregion thumbnail

	//#region discount
	get discount(): number {
		return this._discount;
	}
	set discount(discount: number) {
		this._discount = discount;
	}
	//#endregion discount

	//#region stock
	get stock(): number {
		return this._stock;
	}
	set stock(stock: number) {
		this._stock = stock;
	}
	public increaseStock(): void {
		this._stock++;
	}
	public decreaseStock(): void {
		this._stock--;
	}
	//#endregion stock

	public create(prod: Product): void {
		this._id = prod._id;
		this._name = prod._name;
		this._type = prod._type;
		this._price = prod._price;
		this._description = prod._description;
		this._image = prod._image;
		this._thumbnail = prod._thumbnail;
		this._stock = prod._stock;
		this._discount = prod._discount;
	}
}
