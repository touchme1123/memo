package com.shpark.calc.backend.service;


import com.shpark.calc.backend.dto.GroupDTO;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface GroupService {

    int register(GroupDTO groupDTO);

    GroupDTO get(int gno);

    void remove(int pno);

    List<GroupDTO> getAll();


}
