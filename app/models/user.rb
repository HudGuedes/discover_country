# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, length: { minimum: 6 }
  devise :database_authenticatable, :rememberable, :registerable, :recoverable, :rememberable, :validatable
end
