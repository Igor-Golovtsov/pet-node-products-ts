
import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from 'mongoose'
import ProductModel, { ProductDocument, ProductInput } from '../models/product.model'

const createProduct = async (input: DocumentDefinition<ProductInput>) => {
  return await ProductModel.create(input)
}

const findProduct = (query: FilterQuery<ProductDocument>, options: QueryOptions = { lean: true }) => {
  return ProductModel.findOne(query, {}, options);
}

const findAndUpdateProduct = (query: FilterQuery<ProductDocument>, update: UpdateQuery<ProductDocument>, options: QueryOptions) => {
  return ProductModel.findOneAndUpdate(query, update, options)
}

const deleteProduct = (query: FilterQuery<ProductDocument>) => {
  return ProductModel.deleteOne(query)
}

export {
  createProduct,
  findProduct,
  findAndUpdateProduct,
  deleteProduct
}