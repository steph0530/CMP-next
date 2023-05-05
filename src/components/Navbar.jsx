"use client";

import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import "./styles.css";

import { NavWrapper } from "@/ui/Container";
export const Navbar = () => {
  return (
    <NavWrapper>
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              預約 <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List two">
                <ListItem
                  title="預約"
                  href="/docs/primitives/overview/introduction"
                ></ListItem>
                <ListItem
                  title="天灸"
                  href="/docs/primitives/overview/getting-started"
                ></ListItem>
                <ListItem
                  title="初診登記"
                  href="/docs/primitives/overview/styling"
                ></ListItem>
                <ListItem
                  title="遙距初診登記"
                  href="/docs/primitives/overview/animation"
                ></ListItem>
                <ListItem
                  title="天灸預約系統"
                  href="/docs/primitives/overview/accessibility"
                ></ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              診所 <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List two">
                <ListItem
                  title="總覽"
                  href="/docs/primitives/overview/introduction"
                ></ListItem>
                <ListItem
                  title="檢測紀錄"
                  href="/docs/primitives/overview/getting-started"
                ></ListItem>
                <ListItem
                  title="工作記錄"
                  href="/docs/primitives/overview/styling"
                ></ListItem>
                <ListItem
                  title="費用報銷"
                  href="/docs/primitives/overview/animation"
                ></ListItem>
                <ListItem
                  title="飯錢"
                  href="/docs/primitives/overview/accessibility"
                ></ListItem>
                <ListItem
                  title="聯絡簿"
                  href="/docs/primitives/overview/releases"
                ></ListItem>
                <ListItem
                  title="福利及津貼"
                  href="/docs/primitives/overview/releases"
                ></ListItem>
                <ListItem
                  title="診所"
                  href="/docs/primitives/overview/releases"
                ></ListItem>
                <ListItem
                  title="管理"
                  href="/docs/primitives/overview/releases"
                ></ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              日曆
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              會員 <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List two">
                <ListItem
                  title="會員"
                  href="/docs/primitives/overview/introduction"
                ></ListItem>
                <ListItem
                  title="辦理入會"
                  href="/docs/primitives/overview/getting-started"
                ></ListItem>
                <ListItem
                  title="埋數"
                  href="/docs/primitives/overview/styling"
                ></ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              訂藥
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>

          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="NavigationMenuTrigger">
              患者 <CaretDownIcon className="CaretDown" aria-hidden />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="NavigationMenuContent">
              <ul className="List two">
                <ListItem
                  title="添加患者"
                  href="/docs/primitives/overview/introduction"
                ></ListItem>
                <ListItem
                  title="患者列表"
                  href="/docs/primitives/overview/getting-started"
                ></ListItem>
              </ul>
            </NavigationMenu.Content>
          </NavigationMenu.Item>

          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div>
      </NavigationMenu.Root>
    </NavWrapper>
  );
};
/* eslint-disable */
const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);
/* eslint-enable */
