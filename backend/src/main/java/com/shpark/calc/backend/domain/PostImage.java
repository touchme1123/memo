package com.shpark.calc.backend.domain;

import jakarta.persistence.Embeddable;
import lombok.*;

@Embeddable
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class PostImage {

    private String imageName;

    private int ord;

}
