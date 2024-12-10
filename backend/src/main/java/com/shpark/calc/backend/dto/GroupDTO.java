package com.shpark.calc.backend.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.antlr.v4.runtime.misc.NotNull;

@Log4j2
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GroupDTO {

    private int gno;

    private String groupName;
}
