import React from "react";
import {render,cleanup,waitFor}from '@testing-library/react'
import mockAxios  from 'axios'
import { Promotions } from '../Pages/Promotion/Promotions';

afterEach(cleanup)
describe('Promotions tests',() => {   
    test('Promotions with content', async () => {
        const mockData =
        {
            data: { 
                promotionCollection: {
                    items:[
                        {
                            title:"some title",
                            description:"some description",
                            url:"www.example.com",
                            img:{
                                url:""
                            }
                        }
            ]} } 
        }
        mockAxios.post.mockImplementationOnce(() =>
        Promise.resolve({ data: mockData }))
        const url = 'https://jsonplaceholder.typicode.com/posts/1'
        const { getByText} = render(<Promotions />);                
        expect(getByText(/Cargando.../i).textContent).toBe("Cargando...")        
         await waitFor(async () => {
            expect(getByText(/title/i).textContent).toContain("some title")
          })      
        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        
       })
       test('Promotions without content', async () => {
        const mockData =
        {
            data: { 
                promotionCollection: {
                    items:null
                } } 
        }
        mockAxios.post.mockImplementationOnce(() =>
        Promise.resolve({ data: mockData }))
        const url = 'https://jsonplaceholder.typicode.com/posts/1'
        const { getByText, getByTestId, rerender } = render(<Promotions />);                
        expect(getByText(/Cargando.../i).textContent).toBe("Cargando...")                     
         await waitFor(async () => {
            expect(getByText(/Cargando.../i).textContent).toBe("Cargando...")
          })      
        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        
       })
})
