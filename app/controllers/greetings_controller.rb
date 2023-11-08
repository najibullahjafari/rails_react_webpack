# app/controllers/greetings_controller.rb
class GreetingsController < ApplicationController
  def random_greeting
    @greeting = Greeting.order('RANDOM()').first&.text || 'No greetings available'
    render :random_greeting
  end
end
