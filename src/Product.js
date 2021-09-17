export default class Product {
	constructor() {
		this._id = String;
		this._name = String;
		this._type = String;
		this._price = Number;
		this._description = String;
		this._image = String;
		this._thumbnail = String;
		this._stock = Number;
		this._discount = Number;
	}

	//#region id
	get id() {
		return this._id;
	}
	set id(id) {
		this._id = id;
	}
	//#endregion id

	//#region name
	get name() {
		return this._name;
	}
	set name(name) {
		this._name = name;
	}
	//#endregion name

	//#region type
	get type() {
		return this._type;
	}
	set type(type) {
		this._type = type;
	}
	//#endregion type

	//#region price
	get price() {
		return this._price;
	}
	set price(price) {
		this._price = price;
	}
	//#endregion price

	//#region description
	get description() {
		return this._description;
	}
	set description(description) {
		this._description = description;
	}
	//#endregion description

	//#region image
	get image() {
		return this._image;
	}
	set image(image) {
		this._image = image;
	}
	//#endregion image

	//#region thumbnail
	get thumbnail() {
		return this._thumbnail;
	}
	set thumbnail(thumbnail) {
		this._thumbnail = thumbnail;
	}
	//#endregion thumbnail

	//#region stock
	get stock() {
		return this._stock;
	}
	set stock(stock) {
		this._stock = stock;
	}
	increaseStock() {
		this._stock++;
	}
	decreaseStock() {
		this._stock--;
	}
	//#endregion stock

	//#region discount
	get discount() {
		return this._discount;
	}
	set discount(discount) {
		this._discount = discount;
	}
	//#endregion discount
}
