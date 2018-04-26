package com.lei.docstar.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class user implements UserDetails {
    @Id
    private String id;
    @Indexed(unique=true)
    private String username;
    private String firstname;
    private String lastname;
    private String password;
    private String email;
    private String picture;
    private List<String> phone;
   private String role;
    private boolean isAccountNonExpired;
    private boolean isAccountNonLocked;
    private boolean isCredentialsNonExpired;
    private boolean isEnabled;
    private List<String> roles;

    public user(Builder b) {
        this.role = b.role;
        this.firstname=b.firstname;
        this.lastname=b.lastname;
        this.email=b.email;
        this.picture=b.picture;
        this.phone=b.phone;

        this.roles = b.roles;
        this.password = b.password;
        this.username = b.username;
        this.isAccountNonExpired = b.isAccountNonExpired;
        this.isAccountNonLocked = b.isAccountNonLocked;
        this.isCredentialsNonExpired = b.isCredentialsNonExpired;
        this.isEnabled = b.isEnabled;
    }

    public user() {

    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return this.isAccountNonExpired;
    }

    @Override
    public boolean isAccountNonLocked() {
        return this.isAccountNonLocked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return this.isCredentialsNonExpired;
    }

    @Override
    public boolean isEnabled() {
        return this.isEnabled;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();
        for( String s : roles ) {
            authorities.add( new SimpleGrantedAuthority( s ) );
        }

        return authorities;
    }



    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }



    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public List<String> getPhone() {
        return phone;
    }

    public void setPhone(List<String> phone) {
        this.phone = phone;
    }


    public static class Builder {
        private String id;
        @Indexed(unique=true)
        private String username;
        private String firstname;
        private String lastname;
        private String password;
        private String email;
        private String picture;
        private List<String> phone;
        private String role;
        private boolean isAccountNonExpired;
        private boolean isAccountNonLocked;
        private boolean isCredentialsNonExpired;
        private boolean isEnabled;
        private List<String> roles;

        public Builder roles( List<String> roles ) { this.roles = roles; return this; }
        public Builder username( String username ) { this.username = username; return this; }
        public Builder password( String password ) { this.password = password; return this; }
        public Builder isAccountNonExpired( boolean f ) { this.isAccountNonExpired = f; return this; }
        public Builder isAccountNonLocked( boolean f ) { this.isAccountNonLocked = f; return this; }
        public Builder isCredentialsNonExpired( boolean f) { this.isCredentialsNonExpired = f; return this; }
        public Builder isEnabled( boolean f ) { this.isEnabled = f; return this; }
      public Builder firstname(String firstname){this.firstname=firstname; return this;}
        public Builder lastname(String lastname){this.lastname=lastname; return this;}
        public Builder email(String email){this.email=email;return this;}
        public Builder phone(List<String> phone){this.phone=phone;return this;}
        public Builder picture(String picture){this.picture=picture; return this;}
        public Builder role(String role){this.role=role; return this;}
        public user build() { return new user(this);

        }
    }


}
