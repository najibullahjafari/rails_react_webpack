class GreetingsController < ApplicationController
  def random_greeting
    render json: { greeting: Greeting.order('RANDOM()').first.text }
  end
end
