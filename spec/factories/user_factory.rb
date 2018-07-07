FactoryBot.define do
  factory :user do
    sequence(:username) { |i| "user_#{i}" }
    password 'Password1'
  end
end