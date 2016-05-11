json.array!(@adverts) do |advert|
  json.extract! advert, :id, :title, :message, :created_at, :user_id
end