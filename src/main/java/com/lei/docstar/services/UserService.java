package com.lei.docstar.services;

import com.lei.docstar.models.User;
import com.lei.docstar.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder encoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if( user == null ) {
            throw new UsernameNotFoundException("no such User");
        } else {
//            System.out.println( user.getUsername() );
//            System.out.println( user.getPassword() );
            return user;
        }
    }
    public List<User> findAll() {
        return userRepository.findAll();
    }
    public User findById(String tid) {
        return userRepository.findById( tid ).get();
    }

    public User createUser(User t) {
        return userRepository.save(t);
    }

    public User updateUser(User t ) {
        String password=t.getPassword();
        String hashedPassword = encoder.encode(password);
        t.setPassword(hashedPassword);
        return userRepository.save( t );
    }

    @PostConstruct
    public void makeMockUsers() {
        if( this.userRepository.count() > 0 ) return;
        this.userRepository.deleteAll();
        String hashedPassword = encoder.encode("123");

        User tu = new User.Builder()
                .roles( Arrays.asList( "USER", "ADMIN" ) )
                .password( hashedPassword )
                .username( "kenny" )
                .firstname("jinhuan")
                .lastname("lei")
                .email("a@b.com")
                .phone(Arrays.asList( "6084334881", "6084334882" ))
                .avatar("url:/123")
                .isEnabled( true )
                .isAccountNonExpired( true )
                .isAccountNonLocked(true)
                .isCredentialsNonExpired(true)
                .build();
        userRepository.save( tu );

        User tu2 = new User.Builder()
                .roles( Arrays.asList( "USER" ) )
                .password( hashedPassword )
                .username( "hunt" )
                .firstname("fname")
                .lastname("lname")
                .email("b@c.com")
                .phone(Arrays.asList( "6084334883", "6084334884" ))
                .avatar("url:/456")
                .isEnabled( true )
                .isAccountNonExpired( true )
                .isAccountNonLocked(true)
                .isCredentialsNonExpired(true)
                .build();
        userRepository.save( tu2 );
    }
}
