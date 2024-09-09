FactoryBot.define do
  factory :user do
    # Defina os atributos necessários para criar um usuário válido
    name { 'teste' }
    email { "user@teste.com" }
    password { "123456789" }
    password_confirmation { "123456789" }
  end
end