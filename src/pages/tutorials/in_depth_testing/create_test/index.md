---
type: 'tutorialstep'
date: 2019-03-01
title: 'Create a test'
technologies: ['pytest']
topics: ['testing', 'python', 'ide']
author: 'allaredko'
subtitle: 'Create a test and navigate between the test and its subject.'
thumbnail: './thumbnail.png'
---

In this step, you can create your first test, run it, and evaluate the test run results.

**Powerful Shortcuts**: 
-  `Shift-Ctrl-T` (Win/Linux) or `Shift-Command-T` (macOS) to navigate to the test and its subject.

# Create a Test

Once the testing framework is selected, PyCharm takes care of test generating so that you can 
create your tests almost automatically:

1. In your application, place the caret on the function you want to test. Then press 
`Shift-Ctrl-T` (Win/Linux) or `Shift-Command-T` (macOS). 

2. In the **Create test** dialog, specify the path to the directory with the tests, alter or leave intact 
the suggested test name and test class name, and select the test method (`test_acceleate` in this example). 
 ![Create test dialog](screenshots/test_create_test_dialog.png)
Click **OK** to complete the task.

3. Now, inspect the newly created ``test_unittest_car.py`` file.

```python
from unittest import TestCase


class TestCar(TestCase):
    def test_accelerate(self):
        self.fail()
```

4. Replace it with something meaningful:

```python
from unittest import TestCase
from Car import Car
car = Car(50)
 
 
class TestCar(TestCase):
    def test_accelerate(self):
        car.accelerate()
        assert car.speed == 55

    def test_accelerate_fail(self):
        car.accelerate()
        assert car.speed == 59
```

This test checks if `speed` equals 55 after the `accelerate` function is executed.

# Navigate to Test or Test Subject
TODO