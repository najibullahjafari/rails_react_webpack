Rails.application.routes.draw do
  get 'root/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  get '/api/random_greeting', to: 'greetings#random_greeting'

  # Defines the root path route ("/")
  # root "articles#index"
end
