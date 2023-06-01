/*
 * @Author: juzhiqinag 1020814597@qq.com
 * @Date: 2023-06-01 14:39:46
 * @LastEditors: juzhiqinag 1020814597@qq.com
 * @LastEditTime: 2023-06-01 15:40:50
 * @FilePath: \lowcodeClient\packages\core\src\untils\index.tsx
 * @Description: 物料方法
 */
import React from "react";
import type { UserComponent, UserComponentConfig } from "@craftjs/core";
import { useNode } from "@craftjs/core";

// 物料类型
export type MaterialComponent = UserComponent;

/**
 * @description: 物料组件HOC ，向下传递 useNode Ref
 * @param：WrapComponent 物料组件
 * @return {*}
 */
export const withMaterialNode: any = (
  WrapComponent: React.FunctionComponent
) => {
  return React.forwardRef((props: any) => {
    const {
      connectors: { connect, drag },
    } = useNode();

    return (
      <WrapComponent
        ref={(dom: HTMLElement) => connect(drag(dom))}
        {...props}
      />
    );
  });
};

/**
 * @description: 创建react物料组件
 * @param: component 物料组件
 * @param: options 物料配置
 * @return {*}
 */
export const createReactMaterial: any = (
  component: MaterialComponent,
  options: Partial<UserComponentConfig<T>>
) => {
  component.craft = options;
  return component as MaterialComponent;
};
