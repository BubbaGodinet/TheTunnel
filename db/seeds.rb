puts 'Wiping Old Data'
Score.destroy_all
Friend.destroy_all
User.destroy_all

puts "🌱 Seeding users..."
u1 = User.create(username: 'Bubba', email: 'gobubbag@gmail.com', password: 'password', password_confirmation: 'password')
u2 = User.create(username: 'Alyssa', email: 'at@gmail.com', password: 'passwordA', password_confirmation: 'passwordA')
u3 = User.create(username: 'Jamal', email: 'j@gmail.com', password: 'passwordJ', password_confirmation: 'passwordJ')
u4 = User.create(username: 'Tanner', email: 't@gmail.com', password: 'passwordT', password_confirmation: 'passwordT')
u5 = User.create(username: 'Kristy', email: 'k@gmail.com', password: 'passwordK', password_confirmation: 'passwordK')
u6 = User.create(username: 'Bruno', email: 'b@gmail.com', password: 'passwordB', password_confirmation: 'passwordB')
u7 = User.create(username: 'Emily', email: 'em@gmail.com', password: 'passwordEM', password_confirmation: 'passwordEM')
u8 = User.create(username: 'Luke', email: 'l@gmail.com', password: 'passwordL', password_confirmation: 'passwordL')
u9 = User.create(username: 'Ashley', email: 'ash@gmail.com', password: 'passwordASH', password_confirmation: 'passwordASH')
u10 = User.create(username: 'Parker', email: 'p@gmail.com', password: 'passwordP', password_confirmation: 'passwordP')

puts "🌱 Seeding scores..."
s1 = Score.create({score: 5542, user_id: u1.id})
s2 = Score.create({score: 500, user_id: u1.id})
s3 = Score.create({score: 1000, user_id: u1.id})
s4 = Score.create({score: 289, user_id: u2.id})
s5 = Score.create({score: 3240, user_id: u2.id})
s6 = Score.create({score: 2328, user_id: u2.id})
s7 = Score.create({score: 2050, user_id: u8.id})
s8 = Score.create({score: 1689, user_id: u10.id})
s9 = Score.create({score: 602, user_id: u7.id})
s10 = Score.create({score: 3568, user_id: u3.id})
s11 = Score.create({score: 3150, user_id: u4.id})
s12 = Score.create({score: 1100, user_id: u6.id})
s13 = Score.create({score: 14300, user_id: u5.id})
s14 = Score.create({score: 14300, user_id: u9.id})

puts "🌱 Seeding friends..."
f1 = Friend.create({friender_id: u1.id, friendee_id: u2.id})

puts "✅ Done seeding!"