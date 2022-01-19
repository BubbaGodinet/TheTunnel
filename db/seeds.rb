puts 'Wiping Old Data'
Score.destroy_all
Friend.destroy_all

puts "🌱 Seeding users..."
u1 = User.create(username: 'Bubba', email: 'gobubbag@gmail.com', password: 'password', password_confirmation: 'password')
u2 = User.create(username: 'Alyssa', email: 'at@gmail.com', password: 'passwordA', password_confirmation: 'passwordA')

puts "🌱 Seeding scores..."
s1 = Score.create({score: 5542, user_id: u1.id})
s2 = Score.create({score: 500, user_id: u1.id})
s3 = Score.create({score: 1000, user_id: u1.id})
s4 = Score.create({score: 289, user_id: u2.id})
s5 = Score.create({score: 3240, user_id: u2.id})
s6 = Score.create({score: 2328, user_id: u2.id})

puts "🌱 Seeding friends..."
f1 = Friend.create({friender_id: u1.id, friendee_id: u2.id})

puts "✅ Done seeding!"