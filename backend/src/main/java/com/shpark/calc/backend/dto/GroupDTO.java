package com.shpark.calc.backend.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;


@Log4j2
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GroupDTO {

    private int gno;

    private String groupName;
}
