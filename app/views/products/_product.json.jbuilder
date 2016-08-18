json.extract! product, :id, :name, :quantity, :description, :picture, :created_at, :updated_at
json.url product_url(product, format: :json)