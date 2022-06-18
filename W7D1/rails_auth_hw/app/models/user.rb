class User < ApplicationRecord
    before_validation :ensure_session_token
    attr_reader :password
    validates :username, :session_token, presence: true, uniqueness: true


    validates :password_digest, presence:{message:'password cant be blank'}
    validates :password , length: {minimum:6, allow_nil: true}
    # @password=""
    # SPIRE -> self.find.cred, password, ispassword, resettoken, ensure token
    #acronom spire  
    def self.find_by_credentials(username,password)
        @user = User.find_by(username: username)
        # @user = User.find_by(password: password)  ---> no we dont do this we never search a user via password
        if @user && @user.is_password?(password)
            return @user
        else
            return nil
        end
    end
    
    def password=(password)
        @password = password # set orignal password to password attrib
        # crypt the password via blowfish hash ans asign to user password digest
        self.password_digest = BCrypt::Password.create(password)
        # we throw the password into bcrypt to hash and salt it and create this password digest salted hash


    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    def reset_session_token!
            self.session_token = SecureRandom::urlsafe_base64
            self.save!
            return self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end


    def self.generate_session_token
        self.session_token = SecureRandom::urlsafe_base64
        return self.session_token

    end



end


