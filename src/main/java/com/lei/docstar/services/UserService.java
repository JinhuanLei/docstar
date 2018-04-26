package com.lei.docstar.services;

import com.lei.docstar.models.user;
import com.lei.docstar.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.Arrays;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder encoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        user user = userRepository.findByUsername(username);
        if( user == null ) {
            throw new UsernameNotFoundException("no such user");
        } else {
            System.out.println( user.getUsername() );
            System.out.println( user.getPassword() );
            return user;
        }
    }

    @PostConstruct
    public void makeMockUsers() {
        if( this.userRepository.count() > 0 ) return;
        this.userRepository.deleteAll();
        String hashedPassword = encoder.encode("123");

        user tu = new user.Builder()
                .roles( Arrays.asList( "USER", "ADMIN" ) )
                .password( hashedPassword )
                .username( "kenny" )
                .firstname("jinhuan")
                .lastname("lei")
                .email("a@b.com")
                .phone(Arrays.asList( "6084334881", "6084334882" ))
                .picture("url:/123")
                .isEnabled( true )
                .isAccountNonExpired( true )
                .isAccountNonLocked(true)
                .isCredentialsNonExpired(true)
                .build();
        userRepository.save( tu );

        user tu2 = new user.Builder()
                .roles( Arrays.asList( "USER" ) )
                .password( hashedPassword )
                .username( "hunt" )
                .firstname("fname")
                .lastname("lname")
                .email("b@c.com")
                .phone(Arrays.asList( "6084334883", "6084334884" ))
                .picture("url:/456")
                .isEnabled( true )
                .isAccountNonExpired( true )
                .isAccountNonLocked(true)
                .isCredentialsNonExpired(true)
                .build();
        userRepository.save( tu2 );
    }
}
