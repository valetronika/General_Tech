-- 1) Вывести имена студентов и курсы, которые они проходят
SELECT
    t1.name,
    t3.title
FROM students t1
LEFT JOIN students2courses t2
on t1.id =t2.student_id
LEFT JOIN courses t3
on t2.course_id = t3.id;

-- 2) Вывести имена всех преподавателей с их компетенциями
SELECT
    t1.name,
    t3.title
FROM teachers t1
LEFT JOIN teachers2competencies t2
on t1.id= t2.teacher_id
LEFT JOIN competencies t3
on t2.competencies_id = t3.id;

-- 3) Найти преподавателя, у которого нет компетенций
SELECT
    t1.name
FROM teachers t1
LEFT JOIN teachers2competencies t2
on t1.id= t2.teacher_id
WHERE t2.competencies_id IS NULL;

-- 4) Найти имена студентов, которые не проходят ни один курс
SELECT
    t1.name
FROM students t1
LEFT JOIN students2courses t2
on t1.id =t2.student_id
WHERE t2.course_id is NULL;

-- 5) Найти курсы, которые не посещает ни один студент
SELECT
    *
FROM courses t1
LEFT JOIN students2courses t2
on t1.id = t2.course_id
WHERE t2.student_id is NULL;


-- 6) Найти компетенции, которых нет ни у одного преподавателя
SELECT
    *
FROM competencies t1
LEFT JOIN teachers2competencies t2
on t1.id = t2.competencies_id
WHERE t2.teacher_id is NULL;

-- 7) Вывести название курса и имя старосты
SELECT
    t1.title,
    t2.name
FROM courses t1
inner JOIN students t2
on t1.headman_id = t2.id;

-- 8) Вывести имя студента и имена старост, которые есть на курсах, которые он проходит
SELECT
    t1.name student,
    t4.name headman
FROM students t1
LEFT JOIN students2courses t2
on t1.id = t2.student_id
LEFT JOIN courses t3
on t2.course_id = t3.id
LEFT JOIN students t4
on t3.headman_id = t4.id
