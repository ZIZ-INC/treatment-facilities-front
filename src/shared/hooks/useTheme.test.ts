import {renderHook, act} from "@testing-library/react";
import {useTheme} from "@/shared/hooks/useTheme";
import {describe, it, expect} from "vitest";

describe("useTheme Hook", () => {
    it("should initialize with the default light theme", () => {
        const {result} = renderHook(() => useTheme());
        expect(result.current.theme).toBe("light");
    });

    it("should toggle the theme", () => {
        const {result} = renderHook(() => useTheme());
        act(() => {
            result.current.toggleTheme();
        });
        expect(result.current.theme).toBe("dark");
    });
});
