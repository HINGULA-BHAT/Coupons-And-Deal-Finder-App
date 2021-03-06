package com.microservices.coupons.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RestController;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.*;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.SecurityContext;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Configuration
@EnableSwagger2
public class SpringFoxConfig {                                    
	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select() //returns an instance of Api SelectorBuilder-provides a way to control endpoints exposed by Swagger
				.apis(RequestHandlerSelectors.withClassAnnotation(RestController.class))
				.paths(PathSelectors.any())
				.build();
	}
	private ApiInfo apiInfo() {
	    return new ApiInfo(
	      "Coupon Service",
	      "One of The Microservice for my Case Study",
	      "1.0",
	      "Terms of service",
	      new Contact("Hingula Bhat", "9205622780", "bhat.hingula@gmail.com"),
	      "License of API",
	      "API license URL",
	      Collections.emptyList());
	}
    private ApiKey apiKey() { 
    return new ApiKey("JWT", "Authorization", "header"); 
    }
    
    private SecurityContext securityContext() { 
        return SecurityContext.builder().securityReferences(defaultAuth()).build(); 
    } 

    private List<SecurityReference> defaultAuth() { 
        AuthorizationScope authorizationScope = new AuthorizationScope("global", "accessEverything"); 
        AuthorizationScope[] authorizationScopes = new AuthorizationScope[1]; 
        authorizationScopes[0] = authorizationScope; 
        return Arrays.asList(new SecurityReference("JWT", authorizationScopes)); 
    }
    
    
    
}
