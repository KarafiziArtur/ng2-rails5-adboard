json.array!(@adverts) do |advert|
  json.extract! advert, :id, :title, :message, :created_at
  json.user advert.user.email
  json.url advert_url(advert, format: :json)
end
