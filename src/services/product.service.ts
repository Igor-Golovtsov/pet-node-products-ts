
import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from 'mongoose'
import ProductModel, { ProductDocument, ProductInput } from '../models/product.model'

const createProduct = async (input: DocumentDefinition<ProductInput>) => {
  return await ProductModel.create(input)
}

const findProduct = async (query: FilterQuery<ProductDocument>, options: QueryOptions = { lean: true }) => {
  return await ProductModel.findOne(query, {}, options);
}

const findAndUpdateProduct = async (query: FilterQuery<ProductDocument>, update: UpdateQuery<ProductDocument>, options: QueryOptions) => {
  return await ProductModel.findOneAndUpdate(query, update, options)
}

const deleteProduct = async (query: FilterQuery<ProductDocument>) => {
  return await ProductModel.deleteOne(query)
}

export {
  createProduct,
  findProduct,
  findAndUpdateProduct,
  deleteProduct
}