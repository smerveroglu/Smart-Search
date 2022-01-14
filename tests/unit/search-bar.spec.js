import { mount, createLocalVue } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const mockSearchData = "sa";
const mockListLength = 2;
describe("SearchBar.vue", () => {
  const localVue = createLocalVue();
  localVue.component("FontAwesomeIcon", FontAwesomeIcon);
  const wrapper = mount(SearchBar, {
    localVue,
  });
  const inputData = wrapper.find("input");
  wrapper.setData({
    input: mockSearchData,
  });

  it("renders the component", () => {
    expect(wrapper.is(SearchBar)).toBe(true);
  });

  it("renders the form elements", () => {
    expect(wrapper.find('[name="searchInput"]').exists()).toBe(true);
  });

  it("sets the input data",() => {
    expect(inputData.element.value).toBe(mockSearchData);
  });

  it("checks the list", () => {
    expect(inputData.element.value).toBe(mockSearchData);
    expect(wrapper.vm.$data.filteredData.length).toBe(mockListLength);
  });

  it("check empty input and list", async () => {
    await wrapper.setData({
      input: "",
    });
    expect(inputData.element.value).toBe("");
    expect(wrapper.vm.$data.filteredData.length).toBe(0);
  });
});
