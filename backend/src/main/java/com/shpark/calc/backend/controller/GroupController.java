package com.shpark.calc.backend.controller;

import com.shpark.calc.backend.dto.GroupDTO;
import com.shpark.calc.backend.service.GroupService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/group")
@Log4j2
@RequiredArgsConstructor
public class GroupController {

    private final GroupService groupService;

    @PostMapping("/register")
    public int register(@RequestBody GroupDTO groupDTO) {
        int gno = groupService.register(groupDTO);
        log.info(gno);
        return gno;
    }

    @GetMapping("/{gno}")
    public GroupDTO get(@PathVariable int gno) {
        log.info("----- POST GET METHOD START -----");
        GroupDTO groupDTO = groupService.get(gno);

        return groupDTO;
    }

    @GetMapping("/")
    public List<GroupDTO> getAll() {
        List<GroupDTO> groupDTOList = groupService.getAll();

        return groupDTOList;
    }


    @DeleteMapping("/{gno}")
    public Map<String, String> remove(@PathVariable int gno) {
        groupService.remove(gno);

        return Map.of("POST REGISTER", "SUCCESS");
    }
}
