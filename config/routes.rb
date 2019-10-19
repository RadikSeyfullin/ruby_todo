Rails.application.routes.draw do
  root 'todo#index'
  get 'update/:id' => 'todo#update'
  get 'create' => 'todo#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
