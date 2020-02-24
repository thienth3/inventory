package com.dlaca.web.rest;

import com.dlaca.security.jwt.JWTConfigurer;
import com.dlaca.security.jwt.TokenProvider;
import com.dlaca.service.UserService;
import com.dlaca.service.dto.UserDTO;
import com.dlaca.web.rest.vm.LoginVM;

import com.codahale.metrics.annotation.Timed;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

/**
 * Controller to authenticate users.
 */
@RestController
@RequestMapping("/api")
public class UserJWTController {

    private final Logger log = LoggerFactory.getLogger(UserJWTController.class);

    private final TokenProvider tokenProvider;

    private final AuthenticationManager authenticationManager;

    private final UserService userService;

    public UserJWTController(TokenProvider tokenProvider, AuthenticationManager authenticationManager, UserService userService) {
        this.tokenProvider = tokenProvider;
        this.authenticationManager = authenticationManager;
        this.userService = userService;
    }

    @PostMapping("/authenticate")
    @Timed
    public ResponseEntity authorize(@Valid @RequestBody LoginVM loginVM, HttpServletResponse response) {

        UsernamePasswordAuthenticationToken authenticationToken =
            new UsernamePasswordAuthenticationToken(loginVM.getUsername(), loginVM.getPassword());

//        try {
        Authentication authentication = this.authenticationManager.authenticate(authenticationToken);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            boolean rememberMe = (loginVM.isRememberMe() == null) ? false : loginVM.isRememberMe();
            String jwt = tokenProvider.createToken(authentication, rememberMe);
            response.addHeader(JWTConfigurer.AUTHORIZATION_HEADER, "Bearer " + jwt);
            UserDTO user = new UserDTO(userService.getUserWithAuthorities());
            return ResponseEntity.ok(new JWTToken(jwt, user));
//        } catch (AuthenticationException ae) {
//            log.trace("Authentication exception trace: {}", ae);
//            return new ResponseEntity<>(Collections.singletonMap("AuthenticationException",
//                ae.getLocalizedMessage()), HttpStatus.UNAUTHORIZED);
//        }
    }

    /**
     * Object to return as body in JWT Authentication.
     */
    static class JWTToken {

        private String idToken;
        private UserDTO userInfo;

        JWTToken(String idToken, UserDTO userInfo) {
            this.idToken = idToken;
            this.userInfo = userInfo;
        }

        public UserDTO getUserInfo() {
            return userInfo;
        }

        public void setUserInfo(UserDTO userInfo) {
            this.userInfo = userInfo;
        }

        public String getIdToken() {
            return idToken;
        }

        public void setIdToken(String idToken) {
            this.idToken = idToken;
        }
    }
}
