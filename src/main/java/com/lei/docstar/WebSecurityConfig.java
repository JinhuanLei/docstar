package com.lei.docstar;

import com.lei.docstar.security.AuthenticationFailure;
import com.lei.docstar.security.AuthenticationSuccess;
import com.lei.docstar.security.EntryPointUnauthorizedHandler;
import com.lei.docstar.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	private UserService service;
	
	@Autowired
	private AuthenticationFailure authFailure;
	
	@Autowired
	private AuthenticationSuccess authSuccess;

	@Autowired
	private EntryPointUnauthorizedHandler authDenied;
	
    @Override
    protected void configure(HttpSecurity http) throws Exception {
//        http
//            .authorizeRequests()
//            		.antMatchers("/","/styles.bundle.js","/**.jpg","/polyfills.bundle.js","/vendor.bundle.js","/main.bundle.js","/favicon.ico","/inline.bundle.js","/css/**", "/assets/**", "/js/**", "/user", "/login", "/logout").permitAll()
//                .anyRequest().authenticated()
//                .and()
//            .exceptionHandling()
//            		.authenticationEntryPoint(authDenied)
//            		.and()
//            .formLogin()
//				.successHandler(authSuccess)
//				.failureHandler(authFailure)
//				.loginPage("/")
//				.loginProcessingUrl("/login")
//				.defaultSuccessUrl("/user")
//				.usernameParameter("username")
//				.passwordParameter("password")
//				.permitAll()
//                .and()
//            .logout()
//                .permitAll()
//                .and()
//            .csrf()
//            		.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
        http.csrf().disable().authorizeRequests().anyRequest().permitAll();
    }

    @Autowired
    public void configureGlobal( AuthenticationManagerBuilder auth ) throws Exception {
    		auth.userDetailsService( service );
    }
    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider( authenticationProvider());
    }
    
    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(service);
        authProvider.setPasswordEncoder(encoder());
        
        return authProvider;
    }
    
    @Bean
    public PasswordEncoder encoder() {
    		PasswordEncoder encoder = new BCryptPasswordEncoder(11);
        return encoder;
    }
}