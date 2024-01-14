import useSidebarQuery from "../../hooks/useGetSidebar";
import Dropdown, { DropdownOption } from "../Common/Dropdown";
import InputField from "../Common/InputField";
import TemplateSelector, {
  ITemplateSelectorOption,
} from "../Common/TemplateSelector/TemplateSelector";

const GeneratorSidebar = () => {
  // useGetSidebar, show all elements from all items
  const { data, isError, isFetching } = useSidebarQuery();

  if (isError) return <div>Error</div>;
  if (isFetching) return <div>Loading...</div>;
  if (!data) return <div>No data</div>;

  const dropdownOptions = [
    {
      label: "Home",
      value: "home",
    },
    {
      label: "About",
      value: "about",
    },
    {
      label: "Contact",
      value: "contact",
    },
  ] as DropdownOption[];

  const templateOptions = [
    {
      label: "Home",
      value: "home",
      description: "Home page",
    },
    {
      label: "About",
      value: "about",
      description: "About page",
    },
    {
      label: "Contact",
      value: "contact",
      description: "Contact page",
    },
  ] as ITemplateSelectorOption[];

  return (
    <div className="bg-primary rounded-2xl p-5 w-1/5 min-h-screen">
      {/* letter spacing -0.15px */}
      <p className="text-textGray font-poppins text-base font-500 mb-[10px]">
        Block Category
      </p>

      <Dropdown
        placeHolder="Select a category"
        defaultValue="contact"
        options={dropdownOptions}
        // onChange={(e) => alert(e.target.value)}
      />

      <InputField
        label="Search Element"
        defaultValue="Name"
        placeHolder="Enter a element to search for"
        // onChange={(e) => alert(e.target.value)}
      />

      <TemplateSelector label="Drews Template" options={templateOptions} />
      <TemplateSelector label="Drews Template" options={templateOptions} />
    </div>

    // <div>
    //   {data &&
    //     data.map((item) => (
    //       <div className="bg-red-500 mb-4" key={item.id}>
    //         <h1>Title: {item.title}</h1>
    //         <h2>Description: {item.description}</h2>
    //         <h3>ID: {item.id}</h3>
    //         {item.functions.map((func, index) => (
    //           <div key={index}>
    //             <h4>Name: {func.name}</h4>
    //             <h5>Macro Name: {func.macroName}</h5>
    //             {func.variables &&
    //               func.variables.map((variable, index) => (
    //                 <div key={index}>
    //                   <h6>Label: {variable.label}</h6>
    //                   <h6>Variable Name: {variable.variableName}</h6>
    //                   <h6>Value: {variable.value}</h6>
    //                   <h6>Type: {variable.type}</h6>
    //                 </div>
    //               ))}
    //           </div>
    //         ))}

    //         <button
    //           className="bg-blue-500"
    //           onClick={() => alert(JSON.stringify(item))}
    //         >
    //           Add Function
    //         </button>
    //       </div>
    //     ))}
    // </div>
  );
};

export default GeneratorSidebar;
