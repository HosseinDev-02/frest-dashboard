import {useState} from "react";
import {closestCorners, DndContext, DragOverlay, PointerSensor, useSensor, useSensors} from "@dnd-kit/core";
import {arrayMove, SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";
import TodoContainer from "../../Components/TodoContainer/TodoContainer";
import Todo from "../../Components/Todo/Todo";


const initialContainers = {
    progressing: [
        {
            id: 1,
            content: `<p style="font-family: 'IranYekan Bold'; font-size: 15px;">بازبینی برنامه های تمام شده</p>`,
            label: {title: 'تجربه کاربر', color: 'rgb(90, 141, 238)'},
            comments: 8,
            attachments: 12,
            category: 'progressing',
            members: ['/images/avatars/1.png', '/images/avatars/2.png']
        },
        {
            id: 2,
            content: `<p style="font-family: 'IranYekan Bold'; font-size: 15px;">تحقیق در رابطه با صفحه سوالات متداول</p>`,
            label: {title: 'بازبینی کد', color: 'rgb(0, 207, 221)'},
            comments: 5,
            attachments: 2,
            category: 'progressing',
            members: ['/images/avatars/1.png', '/images/avatars/14.png']
        },
    ],
    checking: [
        {
            id: 3,
            content: `<p style="font-family: 'IranYekan Bold'; font-size: 15px;">بازبینی برنامه های تمام شده</p>`,
            label: {title: 'اطلاعات', color: 'rgb(57, 218, 138)'},
            comments: 14,
            attachments: 6,
            category: 'checking',
            members: ['/images/avatars/1.png', '/images/avatars/10.png']
        },
        {
            id: 4,
            content: `<img src="/images/11.jpg" style="width: 100%; height: 228px; border-radius: 4px" />`,
            label: {title: 'تصاویر', color: 'rgb(253, 126, 20)'},
            comments: 9,
            attachments: 4,
            category: 'checking',
            members: ['/images/avatars/1.png', '/images/avatars/9.png']
        },
    ],
    done: [
        {
            id: 5,
            content: `<p style="font-family: 'IranYekan Bold'; font-size: 15px;">تحقیق در رابطه با صفحه سوالات متداول</p>`,
            label: {title: 'برنامه', color: 'rgb(102, 16, 242)'},
            comments: 21,
            attachments: 7,
            category: 'done',
            members: ['/images/avatars/1.png', '/images/avatars/6.png']
        },
        {
            id: 6,
            content: `<p style="font-family: 'IranYekan Bold'; font-size: 15px;">بازبینی برنامه های تمام شده</p>`,
            label: {title: 'نمودارها و نقشه ها', color: 'rgb(255, 91, 92)'},
            comments: 11,
            attachments: 5,
            category: 'done',
            members: ['/images/avatars/1.png', '/images/avatars/5.png']
        },
    ],
};

export default function TaskBoard() {
    const [items, setItems] = useState(initialContainers);
    const [activeId, setActiveId] = useState(null); // برای ذخیره id آیتم درگ شده
    const [draggingItem, setDraggingItem] = useState(null); // برای ذخیره آیتم در حال درگ
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {distance: 5},
        })
    );

    const handleDragEnd = (event) => {
        const { active, over } = event;
        setActiveId(null);
        setDraggingItem(null);

        if (!over) return;

        const activeContainer = findContainer(active.id);
        let overContainer = findContainer(over.id);

        if (!activeContainer) return;

        setItems((prev) => {
            const newItems = { ...prev };
            const sourceItems = [...prev[activeContainer]];

            // پیدا کردن کانتینر مقصد
            if (!overContainer && Object.keys(items).includes(over.id)) {
                overContainer = over.id;
            }

            if (!overContainer) return prev;

            const oldIndex = sourceItems.findIndex((item) => item.id === active.id);
            const destinationItems = [...prev[overContainer]];

            if (activeContainer === overContainer) {
                // جابجایی داخل همان کانتینر
                const newIndex = destinationItems.findIndex((item) => item.id === over.id);
                if (oldIndex !== -1 && newIndex !== -1) {
                    newItems[activeContainer] = arrayMove(sourceItems, oldIndex, newIndex);
                }
            } else {
                // جابجایی بین کانتینرها
                if (oldIndex !== -1) {
                    const movedItem = sourceItems.splice(oldIndex, 1)[0];
                    if (destinationItems.length === 0 || over.id === overContainer) {
                        // در صورتی که کانتینر خالی باشد، آیتم را مستقیماً اضافه می‌کنیم
                        destinationItems.push(movedItem);
                    } else {
                        const newIndex = destinationItems.findIndex((item) => item.id === over.id);
                        if (newIndex === -1) {
                            destinationItems.push(movedItem);
                        } else {
                            destinationItems.splice(newIndex, 0, movedItem);
                        }
                    }

                    newItems[activeContainer] = sourceItems;
                    newItems[overContainer] = destinationItems;
                }
            }

            return newItems;
        });
    };


    const handleDragStart = (event) => {
        const {active} = event;
        const foundItem = Object.values(items)
            .flat() // تبدیل به یک آرایه تخت
            .find(item => item.id === active.id);
        setActiveId(active.id);
        setDraggingItem(foundItem); // ذخیره آیتم در حال درگ
    };

    const findContainer = (id) => {
        console.log('container Id:', id)
        return Object.keys(items).find((key) => items[key].some(item => item.id === id));
    };

    return (
        <div className='container h-screen'>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCorners}
                onDragEnd={handleDragEnd}
                onDragStart={handleDragStart}
            >
                <div className='overflow-auto flex gap-4 p-4'>
                    {Object.keys(items).map((containerId) => (
                        <SortableContext
                            key={containerId}
                            items={items[containerId]}
                            strategy={verticalListSortingStrategy}
                        >
                            <TodoContainer id={containerId}>
                                {items[containerId].map((item) => (<Todo key={item.id} id={item.id} todo={item}/>))}
                            </TodoContainer>
                        </SortableContext>
                    ))}
                </div>
                <DragOverlay>
                    {draggingItem ? <Todo todo={draggingItem}/> : null}
                </DragOverlay>
            </DndContext>
        </div>
    )
}