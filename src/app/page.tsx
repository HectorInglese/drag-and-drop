'use client';

const hangleDragOver = (e: React.DragEvent) => {
  e.preventDefault();
  const afterElement = getDragAfterElement(e.currentTarget as HTMLElement, e.clientY)
  const draggable = document.querySelector('.dragging')!
  if (afterElement == null) {
    e.currentTarget.appendChild(draggable)
  } else {
    e.currentTarget.insertBefore(draggable, afterElement)
  }
}

function getDragAfterElement(container: HTMLElement, y: number) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
  
  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY, element: null as Element | null }).element;
}

export default function Home() {
  return (
    <main
      className="w-screen h-screen flex gap-5"
    >
      <div
        className="cont"
        onDragOver={(e) => hangleDragOver(e)}
      >
        <div
          className="draggable text-center"
          draggable
          onDragStart={(e) => {
            e.currentTarget.classList.add('dragging')
          }}
          onDragEnd={(e) => {
            e.currentTarget.classList.remove('dragging')
          }}
        >
          1
        </div>
        <div
          className="draggable text-center"
          draggable
          onDragStart={(e) => {
            e.currentTarget.classList.add('dragging')
          }}
          onDragEnd={(e) => {
            e.currentTarget.classList.remove('dragging')
          }}
        >
          2
        </div>
      </div>
      <div
        className="cont"
        onDragOver={(e) => hangleDragOver(e)}
      >
        <div
          className="draggable text-center"
          draggable
          onDragStart={(e) => {
            e.currentTarget.classList.add('dragging')
          }}
          onDragEnd={(e) => {
            e.currentTarget.classList.remove('dragging')
          }}
        >
          3
        </div>
        <div
          className="draggable text-center"
          draggable
          onDragStart={(e) => {
            e.currentTarget.classList.add('dragging')
          }}
          onDragEnd={(e) => {
            e.currentTarget.classList.remove('dragging')
          }}
        >
          4
        </div>
      </div>
    </main>
  );
};
