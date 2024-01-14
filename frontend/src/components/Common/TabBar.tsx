import { useState } from "react";

export interface TabBarProps {
  tabs: TabBarTabs[];
  value?: number;
  onChange?: (value: number) => void;
}

export interface TabBarTabs {
  label: string;
  component?: React.ReactNode;
  onClick?: () => void;
}

const TabBar: React.FC<TabBarProps> = ({ tabs, value, onChange }) => {
  const [activeTab, setActiveTab] = useState<number | null>(value ?? null);

  return (
    <div className="w-full">
      <div className="flex items-center gap-4 pb-5">
        {tabs?.map((tab: TabBarTabs, index: number) => {
          return (
            <button
              className={`gap-[15.6px] flex items-center justify-between text-white font-poppins text-md font-semibold px-7 py-3 rounded-lg transition-all ${
                activeTab === index
                  ? "bg-themeGreen"
                  : "bg-tertiary hover:bg-themeGreen hover:bg-opacity-80"
              } `}
              key={index}
              onClick={() => {
                setActiveTab(index);
                tab.onClick && tab.onClick();
                onChange && onChange(index);
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs[activeTab ?? 0]?.component}
    </div>
  );
};

export default TabBar;
