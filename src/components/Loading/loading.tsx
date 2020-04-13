import React, { PropsWithChildren, useRef, useState, useEffect } from "react";
import "./loading.styles.scss";
import makeClassNames from "classnames";
import { domPrefix } from "./loading-dom";

export function Loading({
  className,
  children,
  loading = true,
  ...props
}: PropsWithChildren<{
  className?: string;
  loading?: boolean;
}>) {
  const loadingRef = useRef<number | null>(null);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    if (loading) {
      loadingRef.current = (setTimeout(() => {
        setShouldShow(true);
      }, 1000) as unknown) as number;
    }

    return () => {
      if (loadingRef.current) {
        clearTimeout(loadingRef.current);
      }
    };
  }, [loading]);

  return shouldShow ? (
    <div
      className="components-loading"
      id={domPrefix}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div
        className={makeClassNames({
          "components-loading__spinner": true,
          [className || ""]: !!className,
        })}
        {...props}
      >
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>

      {children}
    </div>
  ) : null;
}
