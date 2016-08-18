class Product < ApplicationRecord
	has_many :users, through:  :sales
	has_many :sales
end
