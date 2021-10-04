 package com.authentication.agent.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@Configuration //class as a source of bean
public class WebConfig implements WebMvcConfigurer {

    private static final Long MAX_AGE = 3600L;

//CORS enable
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        //returns a corsRegistration object which can be used for additional configuration
    	registry.addMapping("/**")
                .allowedHeaders(
                        "*")
                .allowedMethods(
                        HttpMethod.GET.name(),
                        HttpMethod.POST.name(),
                        HttpMethod.PUT.name(),
                        HttpMethod.DELETE.name(),
                        HttpMethod.OPTIONS.name())
                .maxAge(MAX_AGE)
                .allowedOrigins("*")
                .allowCredentials(false);
    }
}
