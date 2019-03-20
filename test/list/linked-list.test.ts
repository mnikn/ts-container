import * as chai from 'chai';
import {LinkNode, LinkedList} from '../../src/list/linked-list';


const expect = chai.expect;
describe('LinkedList', () => {

    it('should create success', () => {
        const list = new LinkedList<number>();
        expect(list).is.not.null;
    });

    it('should add element success', () => {
        const list = new LinkedList<any>();
        list.push({id: 1});
        list.push({id: 2});

        expect(list.first.val).is.not.null;
        expect(list.first.val.id).eql(1);
        expect(list.first.next.val).is.not.null;
        expect(list.first.next.val.id).eql(2);
    });

    it('should remove element success', () => {
        const list = new LinkedList<any>();
        list.push({id: 1});
        list.push({id: 2});
        list.remove(val => val.id === 1);

        expect(list.first.val).is.not.null;
        expect(list.first.val.id).eql(2);
    });

    it('should find element', () => {
        const list = new LinkedList<any>();
        list.push({id: 1});
        list.push({id: 2});
        list.push({id: 3});

        const findNode = list.find(val => val.id === 3);
        expect(findNode).is.not.null
        expect(findNode.val.id).eql(3);
    });

    it('should map success', () => {
        const list = new LinkedList<any>();
        list.push({id: 1});
        list.push({id: 2});
        list.push({id: 3});

        const anotherList = list.map(val => {
            return {id: val.id * 2};
        });

        expect(anotherList.firstVal).is.not.null;
        expect(anotherList.firstVal.id).eql(2);
        expect(anotherList.first.next.val.id).eql(4);
        expect(anotherList.first.next.next.val.id).eql(6);
    });


});